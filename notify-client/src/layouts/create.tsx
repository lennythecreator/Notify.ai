import React from 'react'
import { Widget } from '../components/ui/widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export const Create = () => {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("")
  const [uploadedFile, setUploadedFile] = useState({})

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Upload document');
    }
  }
  
  return (
    <Widget>
        <h1 className="text-left text-xl">Create</h1>
       <div className='flex items-center gap-4'>
             
       <div className="flex items-center gap-4">
          <label htmlFor="file-upload" className="border-2 border-gray-300 rounded-[8px] h-11 px-4 flex items-center cursor-pointer hover:bg-gray-100">
            <span className="text-gray-700">Upload document: {fileName} <FontAwesomeIcon icon={faUpload}/></span>
          </label>
          <input id="file-upload" type="file" className="hidden" onChange={handleFileChange}/>
        </div>

        <button className='text-white'>Generate Note</button>
       </div>
    </Widget>
  )
}
