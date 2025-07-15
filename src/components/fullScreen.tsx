
function handleClick() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

const fullScreen = () => {
  return (
    <div className='card'id='moreMenu'>
        <img src="\public\fullscreen.png" onClick={handleClick}></img>
        {/* <img src="dist/fullscreen.png" onClick={handleClick}></img> */}
    </div>
  )
}

export default fullScreen