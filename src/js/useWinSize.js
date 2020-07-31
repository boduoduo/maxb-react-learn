import React, { useState, useCallback, useEffect } from "react";

function useWinSize() {
  const [size, setsize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientWidth
  })

  const onResize = useCallback(
    () => {
      setsize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientWidth
      })
    },
    []
  )

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[])

  return size

}