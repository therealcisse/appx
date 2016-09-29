export const saveAs = function () {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';

  return function (data, fileName, type = 'octet/stream') {
    const blob = new Blob(data, {type,}),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
}();
