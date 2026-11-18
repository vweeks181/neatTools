
(() => {
  // Find links that call the website's ccms_O() JavaScript function.
  const contactLinks = [
    ...document.querySelectorAll('a[href^="javascript:ccms_O"]')
  ];

  // Process each contact link.
  const contacts = contactLinks.map(link => {

    // Extract the three arguments passed to ccms_O().
    // These contain the encoded email data and decoding values.
    const match = link.getAttribute('href').match(
      /ccms_O\('([^']+)',\s*(\d+),\s*(\d+)\)/
    );

    // Skip links that don't match the expected structure.
    if (!match) return null;

    // Decode the email address using the website's existing function.
    const decodedEmail = ccms_O2(
      match[1],
      Number(match[2]),
      Number(match[3])
    );

    // Remove the mailto: prefix and any additional query parameters.
    const email = decodedEmail
      .replace(/^mailto:/i, '')
      .split('?')[0];

    // Return the contact's name and email address.
    return {
      name: link.innerText.trim(),
      email: email
    };

  }).filter(contact =>
    // Keep only valid-looking email addresses.
    contact && contact.email.includes('@')
  );

  // Create the TSV header and add one row per contact.
  const tsv = [
    'Name\tEmail Address',
    ...contacts.map(contact =>
      `${contact.name}\t${contact.email}`
    )
  ].join('\n');

  // Convert the TSV text into a downloadable file.
  const blob = new Blob([tsv], {
    type: 'text/tab-separated-values;charset=utf-8'
  });

  // Generate a temporary URL for the file.
  const url = URL.createObjectURL(blob);

  // Create a temporary download link.
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'contact-directory.tsv';

  // Trigger the download.
  downloadLink.click();

  // Release the temporary URL.
  URL.revokeObjectURL(url);

  // Report the number of contacts extracted.
  console.log(`Exported ${contacts.length} contacts.`);
})();
