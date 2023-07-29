# CSV Splitter

CSV Splitter is a Node.js application I built to help my wife with her holiday club forms. It takes a CSV file with a "full name" column and splits it into "first name" and "surname" columns. It's a useful tool for quickly organizing and processing CSV data with names, especailly, if you're like my wife and forgot to separate the first name from the surname in your google form lol!

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your computer. You can download it from https://nodejs.org/

### Installation

1. Clone the repository to your local machine:

2. Navigate to the project directory:
### Usage

1. Place your CSV file in the project directory and name it `input.csv`.

2. To split the "full name" column into "first name" and "surname," run the following command in your terminal:

3. The application will process the data in `input.csv` and create a new file named `output.csv` with the updated headings and data.

### CSV File Format

The input CSV file should have the following format:


Make sure the header contains a "full name" column, and the data rows have corresponding values.

### Important Note

- The application will read the `input.csv` file in the same directory as the `splitFullName.js` script. Ensure the file is correctly placed before running the script.

- The application will overwrite any existing `output.csv` file in the directory without warning. Make sure to back up any important data before running the script.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was created as a learning exercise for working with Node.js and manipulating CSV data.



