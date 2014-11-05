Kata NodeJs
=========

Parses files that look like this:
```text
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
```

Getting Started
----

(_Requires nodejs and npm. I apologize in advance if you need to install
 them._)

1. Clone Repository

  `$ git clone https://github.com/buwilliams/kata-node.git`

2. Install Dependencies

  `$ npm install`
  
3. Run demo (contains several samples as to how to use this utility)

  `$ ./demo.sh`

4. Run Grunt to run unit tests

  `$ grunt`
  
  
From your terminal:
----
  - `$ node src/index.js -h` - shows help message
  - `$ node src/index.js -p input.txt` - parse files and prints to stdout
  - `$ node src/index.js -f input.txt output.txt` - parse files and write results to a file

_(There are more commands but these will get you started.)_ 

High-level Approach
----

The most complicated part of this exercise is the algorithm used to indentify characters. The solution I am using is to take each character, composed of 3 columns and 4 rows, and concatenate them together into a single string which is 12 characters in length. I then use that string as a key in a dictionary. This approach has a few benefits:

  - This makes it easy to take a 3x4 input and lookup it's value with no real computation
  - Code is simple (there's not tricky code to follow)
  - Easy to implement

The downside is that if you want to support more characters (other than 1-9) you would need to generate the keys again. The `src/generate.js` is where this work can be done.

Source Code Overview
---

- `src/dict.js` - The generated dictionary with a few helper methods
- `src/generate.js` - Creates the dictionary
- `src/index.js` - Command-line interface
- `src/parse.js` - The main interface for parsing strings and files
- `src/sample-data.js` - Easy access to the text format
- `src/unparse.js` - Does the opposite of parse
- `src/validate.js` - Uses a checksum to ensure valid numbers
- `test/*` - TDD Unit Tests

Codebase Features
----

  - Grunt Task Runner
  - Jasmine Test Cases using TDD
  - 80 col lines, 4 space indentation
  - Generate new types of keys
  - Jshint to help with clean code

Todo
----


Done
----

  - Generate key map
  - Test framework setup
  - Setup Grunt
  - Parse line
  - Parse multiline
  - Parse text file
  - Output file
  - Checksum
  - Read all the code again
  - Update README again
