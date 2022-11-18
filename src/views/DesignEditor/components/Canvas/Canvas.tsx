import React from "react"
import { Canvas as LayerhubCanvas } from "@layerhub-io/react"
import Playback from "../Playback"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import ContextMenu from "../ContextMenu"

const Canvas = () => {

  const { displayPlayback } = useDesignEditorContext()
  return (
    <div className="canva" style={{ flex: 1, display: "flex", position: "relative" }}>
      {displayPlayback && <Playback />}
      <ContextMenu  />
      <LayerhubCanvas
      
      />
    </div>
  )
}

export default Canvas
