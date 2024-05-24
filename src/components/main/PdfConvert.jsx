import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import TemplatePage from './TemplatePage' // Import the component you want to convert to PDF
const PdfDownloadComponent = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf')
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save('resume.pdf')
      // Specify the name of the downloaded PDF file
    })
  }
  return (
    <div className='buttonDownloadContainer'>
      {/* <TemplatePage id="pdf" />  */}
      {/* Ensure to pass the same id to the target component */}
      <button className='buttonDownload' onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  )
}
export default PdfDownloadComponent