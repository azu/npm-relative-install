# npm-relative-install

Command line tool that install a relative version of a package.

## Installation

    npm install npm-relative-install

## Usage

    $ npm-relative-install -h
    npm-relative-install [options]
    
    Options:
      -h, --help                     Show help.
      -p, --package path::String     package.json path - default: ./package.json
      -d, --installDir path::String  install directory path.
      --diffType path::String        diff type that is difference type of package version. - default: patch
      -v, --version                  Outputs the version number.
 

## Example

To install the "patch" old package.

```sh
npm-relative-install ./package.json -d /path/to/install/dir/
```

## Tests

- [ ] Write How to Tests

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT