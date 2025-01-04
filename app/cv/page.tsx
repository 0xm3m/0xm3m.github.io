'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

const PDFViewer = dynamic(() => import('../components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  ),
})

export default function CV() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Curriculum Vitae</h1>
      <div className="bg-gray-900 rounded-lg p-4 shadow-xl">
        <PDFViewer pdfUrl="/Gnanaraj_Mauviel_Resume.pdf" />
      </div>
    </div>
  )
}

