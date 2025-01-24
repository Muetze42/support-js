import { Str } from '~/Str'

export class SFile {
  /**
   * Remove a file from FileList by index key.
   */
  public static removeFormList(fileList: File[] | FileList, indexKey: number): FileList {
    const dt = new DataTransfer()
    for (let i = 0; i < fileList.length; i++) {
      if (indexKey !== i) {
        dt.items.add(fileList[i])
      }
    }

    return dt.files
  }

  /**
   * Limit the number of characters in a filename string.
   */
  public static limit(value: string, length: number = 16, end: string = '...'): string {
    if (value.length <= length) {
      return value
    }

    length = length - end.length - 1

    let ext = ''
    let parts = Str.reverse(value).split('.')

    if (parts.length > 1) {
      ext = Str.reverse(parts[0])
    }

    value = ''

    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        value += parts[i]
      }
    }

    value = Str.reverse(value)

    return value.substring(0, length - ext.length) + end + ext
  }

  /**
   * Get a Font Awesome icon determined by filename extension.
   */
  public static faIconByFileName(fileName: string): string {
    const extension = fileName.toLowerCase().split('.').pop()
    const iconPrefix = 'fa-regular fa-'

    let icon = ''
    switch (extension) {
      case 'xlsb':
      case 'xlsm':
      case 'xlsx':
      case 'xltx':
        icon = 'file-excel'
        break
      case 'doc':
      case 'docm':
      case 'docx':
        icon = 'file-word'
        break
      case '7z':
      case 'ace':
      case 'apk':
      case 'ar':
      case 'arc':
      case 'ark':
      case 'br':
      case 'bz2':
      case 'cab':
      case 'cdx':
      case 'cpio':
      case 'dmg':
      case 'genozip':
      case 'gz':
      case 'iso':
      case 'lz':
      case 'lz4':
      case 'lzma':
      case 'lzo':
      case 'mar':
      case 'pak':
      case 'rar':
      case 'rz':
      case 's7z':
      case 'sbx':
      case 'sfark':
      case 'shar':
      case 'sz':
      case 'tar':
      case 'tlz':
      case 'wim':
      case 'xar':
      case 'xz':
      case 'z':
      case 'zip':
      case 'zipx':
      case 'zst':
        icon = 'file-zipper'
        break
      case 'xml':
        icon = 'file-xml'
        break
      case '3g2':
      case 'asf':
      case 'avi':
      case 'flv':
      case 'm2v':
      case 'm4p':
      case 'm4v':
      case 'mkv':
      case 'mov':
      case 'mp2':
      case 'mp4':
      case 'mpeg':
      case 'mpg':
      case 'mxf':
      case 'ogg':
      case 'ogv':
      case 'vob':
      case 'webm':
      case 'wmv':
        icon = 'file-video'
        break
      case 'cdr':
      case 'eps':
      case 'svg':
      case 'wmf':
        icon = 'file-vector'
        break
      case 'avif':
      case 'bmp':
      case 'gif':
      case 'heif':
      case 'jpeg':
      case 'jpg':
      case 'png':
      case 'psd':
      case 'tiff':
      case 'webp':
        icon = 'file-image'
        break
      case 'c':
      case 'cpp':
      case 'css':
      case 'go':
      case 'html':
      case 'jar':
      case 'java':
      case 'js':
      case 'php':
      case 'py':
      case 'r':
      case 'rb':
      case 'sass':
      case 'scss':
      case 'sql':
      case 'swift':
      case 'ts':
      case 'vue':
        icon = 'file-code'
        break
      case 'txt':
      case 'md':
        icon = 'file-lines'
        break
      case 'ca-bundle':
      case 'cer':
      case 'crt':
      case 'der':
      case 'p12':
      case 'p7b':
      case 'p7s':
      case 'pem':
      case 'pfx':
        icon = 'file-certificate'
        break
      case 'csv':
        icon = 'file-spreadsheet'
        break
      case 'pdf':
        icon = 'file-pdf'
        break
      case 'aa':
      case 'aac':
      case 'aax':
      case 'aiff':
      case 'ape':
      case 'flac':
      case 'm4a':
      case 'm4b':
      case 'mp3':
      case 'wav':
      case 'wma':
        icon = 'file-audio'
        break
      default:
        icon = 'file'
    }

    return iconPrefix + icon
  }
}
