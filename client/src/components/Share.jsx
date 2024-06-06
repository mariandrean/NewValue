import React from "react"

function Share({ description, url, imageUrl }) {

  function ShareWebAPI() {
    if (navigator.share) {
      navigator.share({
        title: description,
        url: url,
        images: [
          {
            url: imageUrl,
            alt: description,
          },
        ],
      })
        .catch(err => alert("Error Sharing: " + err))
    }
  }

  return (
    <div className="flex gap-2 justify-center">
      <p>Compartir en:</p>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&text=${description}`} target="_blank">
        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="ln" role="img"><path d="m132.28,479.99501l-92.88,0l0,-299.1l92.88,0l0,299.1zm-46.49,-339.9c-29.7,0 -53.79,-24.6 -53.79,-54.3a53.79,53.79 0 0 1 107.58,0c0,29.7 -24.1,54.3 -53.79,54.3zm394.11,339.9l-92.68,0l0,-145.6c0,-34.7 -0.7,-79.2 -48.29,-79.2c-48.29,0 -55.69,37.7 -55.69,76.7l0,148.1l-92.78,0l0,-299.1l89.08,0l0,40.8l1.3,0c12.4,-23.5 42.69,-48.3 87.88,-48.3c94,0 111.28,61.9 111.28,142.3l0,164.3l-0.1,0z"></path></svg>
      </a>
    </div>
  )
}

export default Share;