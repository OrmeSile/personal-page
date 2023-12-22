'use client'
import {Document, Page, pdfjs} from 'react-pdf'
import {useEffect, useRef, useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {Josefin_Sans} from "next/font/google";
const josefinSans = Josefin_Sans({subsets: ['latin']})
import pdf from '@/public/pdf/CV-rev.pdf'
import fullPdf from '@/public/pdf/CV-rev-full.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

export const PDFViewer = () => {
  const [width, setWidth] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) setWidth(entry.contentBoxSize[0] ? entry.contentBoxSize[0].inlineSize : 0)
      }
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <a href={fullPdf} className={`linkButton ${josefinSans.className}`} download={'cv'}>
        Télécharger
      </a>
      <Document
        file={pdf}>
        <Page
          width={width}
          pageNumber={1}
          height={width! * 1.33}
        />
      </Document>
    </div>
  )
}