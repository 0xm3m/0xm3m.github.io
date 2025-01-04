'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  url?: string
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)

  // Use the GitHub raw content URL for the PDF
  const pdfUrl = url || 'https://raw.githubusercontent.com/0xm3m/0xm3m.github.io/main/Gnanaraj_Mauviel_Resume.pdf'

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <div className="bg-[#1a1b26] rounded-lg shadow-lg p-4 w-full border border-[#30363d]">
        <div className="flex justify-center mb-4 gap-2">
          <Button
            variant="outline"
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="border-[#30363d] hover:bg-[#30363d] hover:text-[#4ade80]"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="flex items-center px-4 text-[#4ade80] font-mono">
            Page {pageNumber} of {numPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="border-[#30363d] hover:bg-[#30363d] hover:text-[#4ade80]"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setScale(scale + 0.1)}
            className="border-[#30363d] hover:bg-[#30363d] hover:text-[#4ade80]"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setScale(Math.max(0.1, scale - 0.1))}
            className="border-[#30363d] hover:bg-[#30363d] hover:text-[#4ade80]"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center border border-[#30363d] rounded-lg p-4 bg-[#13141f]">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4ade80]"></div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="max-w-full"
            />
          </Document>
        </div>
      </div>
    </div>
  )
}

