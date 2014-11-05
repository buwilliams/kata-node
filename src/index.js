var _ = require('lodash-node');
var gen = require('./generate.js');
var fs = require('fs');
var parser = require('./parser.js');

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
    '-g': {
        fn: generate,
        desc: 'Generates new keys for dictionary',
        usage: 'node src/index.js -g'
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
    var input = args[3];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(input)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -p requires input.txt');
        console.log('----');
        return;
    }
    
    parseFile(input, function(str) {
        console.log(str);
    });
}

function parseFileAndWrite(args) {
    var input = args[3];
    var output = args[4];

    // Throw up a message if the user didn't give us
    // an input file and a output file destination.
    if(_.isUndefined(input) || _.isUndefined(output)) {
        showHelp();
        console.log('----');
        console.log('ERROR: -f requires input.txt output.txt');
        console.log('----');
        return;
    }

    parseFile(input, function(str) {
        writeFile(output, str);
    });
}

function parseFile(fileLoc, callback) {

    // read file
    fs.readFile(fileLoc, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        // parse file
        var txt = parser.parseRaw(data);

        // write file
        callback(txt);
    });
}

function writeFile(fileLoc, content) {

    fs.writeFile(fileLoc, content, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
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
