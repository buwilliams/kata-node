#!/bin/bash

rm -rf tmp
mkdir -p tmp

echo Kata Node - Pipe Format to Plain Text and back again utility.

echo

echo Sample 1  - Converts the pipe format to plain text
node src/index.js -f sample_files/sample1.txt tmp/sample1-result.txt
echo See tmp/sample1-result.txt \(uses sample_files/sample1.txt\)
echo 

echo Sample 2  - Converts the pipe format to plain text with mixed numbers
node src/index.js -f sample_files/sample2.txt tmp/sample2-result.txt
echo See tmp/sample2-result.txt \(uses sample_files/sample2.txt\)

echo

echo Sample 3  - Uses mixed numbers to validate against checksum
node src/index.js -v sample_files/sample3.txt tmp/sample3-result.txt
echo See tmp/sample3-result.txt \(uses sample_files/sample3.txt\)

echo
