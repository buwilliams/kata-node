#!/bin/bash

rm -rf tmp
mkdir -p tmp

node src/index.js -w sample_files/sample1.txt tmp/sample1-result.txt
echo See tmp/sample1-result.txt for example conversion

node src/index.js -w sample_files/sample2.txt tmp/sample2-result.txt
echo See tmp/sample2-result.txt for example conversion

node src/index.js -v sample_files/sample3.txt tmp/sample3-result.txt
echo See tmp/sample3-result.txt for validation
