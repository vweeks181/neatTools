# neatTools
quick functions that help

# Browser-Based Web Data Extraction

A collection of beginner-friendly JavaScript utilities for extracting structured information from webpages using the browser's Developer Tools Console.

These scripts demonstrate how to inspect webpage HTML, identify relevant elements, retrieve information from JavaScript functions, and export extracted data into TSV (Tab-Separated Values) files.

## Tools Included

### 1. Project Title Extractor

Extracts project titles from webpages that organize projects into HTML links containing `/course/showcase/`.

**Output:** `project-titles.tsv`

**Data extracted:**
- Project Title

### 2. Contact Email Extractor

Extracts contact names and email addresses from webpages that use JavaScript-obfuscated email links.

The script identifies links calling the website's `ccms_O()` function and uses the corresponding `ccms_O2()` decoding function to retrieve email addresses without opening an external email application.

**Output:** `contact-directory.tsv`

**Data extracted:**
- Contact Name
- Email Address

## How to Use

1. Open the webpage containing the information you want to extract.
2. Open your browser's Developer Tools.
3. Navigate to the Console.
4. Copy and paste the appropriate JavaScript script.
5. Press Enter to execute it.
6. The generated TSV file should download automatically.

## Requirements and Limitations

- The scripts run in the browser and do not require additional packages.
- The webpage must have the expected HTML structure.
- The contact extractor requires the webpage's `ccms_O2()` decoding function to be accessible.
- Only information currently loaded into the webpage is extracted. Pagination, lazy loading, or dynamically loaded content may require additional steps.
- The contact extractor is designed for the specific encoding structure demonstrated here; other websites may use different functions or encoding methods.

## Learning Objectives

These examples demonstrate:

- DOM selection with `document.querySelectorAll()`
- JavaScript array methods such as `map()` and `filter()`
- Regular expressions for extracting function arguments
- Calling existing JavaScript functions
- Creating downloadable files using `Blob`
- Generating temporary download URLs
- Exporting structured data into TSV format

## Responsible Use

Use these scripts only on webpages and data you are authorized to access. Follow applicable website terms, privacy requirements, and data-protection rules. Avoid collecting or distributing personal contact information without an appropriate purpose and authorization.

---

## Credits & Collaboration

**Co-written by VA & Link**

*Human curiosity. Machine assistance. Practical results.*

Built through collaborative experimentation, problem-solving, and a shared interest in making technology more accessible.

**VA** — Concept, direction, testing, and human ingenuity.  
**Link (OpenAI ChatGPT)** — Coding assistance, technical explanations, and collaborative development.

*Exploring, building, and figuring things out—one line of code at a time.*
