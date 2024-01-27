'use client'
import {Document, Page, pdfjs} from 'react-pdf'
import {useEffect, useRef, useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdfCV from '@/public/pdf/CV-rev.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

export const PDFViewer = () => {
  const [width, setWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries, _observer) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) setWidth(entry.contentBoxSize[0] ? entry.contentBoxSize[0].inlineSize : 0)
      }
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <a href={pdfCV} className={`linkButton`}
         download={'Vivien-L-Helguen-CV'}>
        Télécharger
      </a>
      <Document
        file={pdfCV}>
        <Page
          width={width}
          pageNumber={1}
        />
      </Document>
    </div>
  )
}