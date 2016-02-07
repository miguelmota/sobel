# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [0.0.3] - 2015-09-09
### Changed
- `Sobel()` returns Uint8ClampedArray with sobel data.
- `[sobelData].toImageData()` return new ImageData object.

## [0.0.6] - 2016-02-07
### Fixed
- `[sobelData].toImageData()` to return fake image data object if `ImageData` not supported.
### Added
- `Sobel.toImageData(data, width, height)` return new ImageData object.
