import PDFViewer from '../components/PDFViewer'

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#13141f] py-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-[#4ade80] font-mono">Curriculum Vitae</h1>
        <PDFViewer />
      </div>
    </main>
  )
}

