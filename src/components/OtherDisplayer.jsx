import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const OtherDisplayer = ({uri}) => {
    const docs = [
        { uri: uri ,
    fileType:uri.slice(uri.indexOf('.')+1),
    fileName:uri.slice(uri.lastIndexOf('/')+1)
    }, // Remote file
        
      ];
      console.log(uri)
  return (
    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:'90vh'}}/>
  )
}

export default OtherDisplayer