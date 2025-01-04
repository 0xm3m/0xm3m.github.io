'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1)
    }
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      changePage(1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center justify-between w-full max-w-xl">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={previousPage}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {pageNumber} of {numPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={pdfUrl} download>
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </a>
        </Button>
      </div>

      <div className="w-full max-w-xl bg-white rounded-lg overflow-hidden">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-[600px]">
              <div className="animate-pulse text-gray-400">Loading PDF...</div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={window.innerWidth >= 768 ? 600 : window.innerWidth - 64}
          />
        </Document>
      </div>
    </div>
  )
}

