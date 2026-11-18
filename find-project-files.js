
(() => {
  // Find all links whose URL contains the project showcase path.
  const projectLinks = [
    ...document.querySelectorAll('a[href*="/course/showcase/"]')
  ];

  // Extract the visible text from each link and remove extra whitespace.
  const titles = projectLinks.map(link =>
    link.innerText.trim()
  );

  // Add a column heading and place each title on its own row.
  const tsv = [
    'Project Title',
    ...titles
  ].join('\n');

  // Convert the text into a downloadable TSV file.
  const blob = new Blob([tsv], {
    type: 'text/tab-separated-values;charset=utf-8'
  });

  // Create a temporary URL for the generated file.
  const url = URL.createObjectURL(blob);

  // Create a temporary download link.
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'project-titles.tsv';

  // Trigger the download.
  downloadLink.click();

  // Release the temporary URL.
  URL.revokeObjectURL(url);

  // Display the number of titles extracted.
  console.log(`Exported ${titles.length} project titles.`);
})();
