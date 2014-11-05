var _ = require('lodash-node');
var gen = require('./generate.js');
var fs = require('fs');
var parser = require('./parse.js');
var unparser = require('./unparse.js');
var validator = require('./validate.js');

var cmds = {
    '-p': {
        fn: parseFileAndPrint,
        desc: 'Parses text file and printes results to stdout',
        usage: 'node src/index.js -f input.txt'
    },
    '-f': {
        fn: parseFileAndWrite,
        desc: 'Parses text file and writes to the specified file',
        usage: 'node src/index.js -f input.txt output.txt'
    },
    '-u': {
        fn: unparseFileAndPrint,
        desc: 'Unparses text file and printes results to stdout',
        usage: 'node src/index.js -u input.txt'
    },
    '-w': {
        fn: unparseFileAndWrite,
        desc: 'Unparses text file and writes to the specified file',
        usage: 'node src/index.js -w input.txt output.txt'
    },
    '-g': {
        fn: generate,
        desc: 'Generates new keys for dictionary',
        usage: 'node src/index.js -g'
    },
    '-v': {
        fn: validateAndWrite,
        desc: 'Parses text file, validates, and writes output to file',
        usage: 'node src/index.js -v input.txt output.txt'
    },
    '-h': {
        fn: showHelp,
        desc: 'This help message',
        usage: 'node src/index.js -h'
    }
};

function showHelp() {
    var flags = _.keys(cmds).join('|');
    console.log('Usage: index.js ['+flags+'] <arguments>');
    _.each(_.keys(cmds), function(key) {
        console.log('    ' + key + '  ' + cmds[key].desc);
        console.log('          $ ' + cmds[key].usage);
    });
}

function generate() {
    gen.generate();
}

function parseFileAndPrint(args) {
    var inputFile = args[3];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(inputFile)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -p requires input.txt');
        console.log('----');
        return;
    }
    
    readFile(inputFile, function(data) {

        // parse file
        var txt = parser.parseRaw(data);

        console.log(txt);
    });
}

function parseFileAndWrite(args) {
    var inputFile = args[3];
    var outputFile = args[4];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(inputFile) || _.isUndefined(outputFile)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -f requires input.txt output.txt');
        console.log('----');
        return;
    }

    readFile(inputFile, function(data) {

        // parse file
        var txt = parser.parseRaw(data);

        writeFile(outputFile, txt);
    });
}

function unparseFileAndPrint(args) {
    var inputFile = args[3];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(inputFile)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -u requires input.txt');
        console.log('----');
        return;
    }
    
    readFile(inputFile, function(data) {

        // parse file
        var txt = unparser.unparse(data);

        console.log(txt);
    });
}

function unparseFileAndWrite(args) {
    var inputFile = args[3];
    var outputFile = args[4];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(inputFile) || _.isUndefined(outputFile)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -w requires input.txt output.txt');
        console.log('----');
        return;
    }

    readFile(inputFile, function(data) {

        // parse file
        var txt = unparser.unparse(data);

        writeFile(outputFile, txt);
    });
}

function validateAndWrite(args) {
    var inputFile = args[3];
    var outputFile = args[4];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(inputFile) || _.isUndefined(outputFile)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -v requires input.txt output.txt');
        console.log('----');
        return;
    }

    readFile(inputFile, function(data) {

        // parse file
        var txt = parser.parseRaw(data);
        txt = validator.validateLines(txt);

        writeFile(outputFile, txt);
    });
}

function readFile(fileLoc, callback) {

    // read file
    fs.readFile(fileLoc, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        // write file
        callback(data);
    });
}

function writeFile(fileLoc, content) {

    fs.writeFile(fileLoc, content, function(err) {
        if(err) {
            console.log(err);
        }
    }); 
}

function main() {
    var command = cmds[process.argv[2]];

    if(!_.isUndefined(command)) {
        command.fn(process.argv);
    } else {
        showHelp();
    }
}

main();
