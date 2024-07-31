import React from 'react'
import { Widget } from '../components/ui/widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


import { GlobalWorkerOptions } from 'pdfjs-dist';


import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';


export const Create = () => {
  const [fileName, setFileName] = useState("")
  const [url, setUrl] = useState('');
  const defaultLayoutPluginInstance = defaultLayoutPlugin();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUrl(URL.createObjectURL(file));
    } else {
      setFileName('Upload document');
      setUrl('');

    }
  }

  
  
  
  return (
    <Widget>
        <h1 className="text-left text-xl">Create</h1>
       <div className='flex flex-col items-center gap-4'>
             
       <div className="flex items-center gap-4">
          <label htmlFor="file-upload" className="border-2 border-gray-300 rounded-[8px] h-11 px-4 flex items-center cursor-pointer hover:bg-gray-100">
            <span className="text-gray-700">Upload document: {fileName} <FontAwesomeIcon icon={faUpload}/></span>
          </label>
          <input id="file-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileChange}/>
          <button className='text-white'>Generate Note</button>
        </div>

        
        
        <div>
          
         {url && <div className='w-full'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <div  className='h-[60vh] w-[60vw]'>
                <Viewer fileUrl={url} plugins={[
                      defaultLayoutPluginInstance,
                  ]} />
                  
              </div>
          </Worker>
          </div>}
         
        
        </div>
       </div>
    </Widget>
  )
}
