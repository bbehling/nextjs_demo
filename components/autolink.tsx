export default function AutoLink({ text }) {
  const delimiter =
    /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

  return (
    <>
      {text?.split(delimiter).map((word) => {
        const match = word.match(delimiter);
        if (match) {
          const url = match[0];

          // remove protocol for display txt
          let urlDisplay = url.replace("https://", "");
          urlDisplay = urlDisplay.replace("http://", "");

          console.log(urlDisplay);
          return (
            <a href={url.startsWith("http") ? url : `http://${url}`} target="_blank">
              {urlDisplay}
            </a>
          );
        }
        return word;
      })}
    </>
  );
}
