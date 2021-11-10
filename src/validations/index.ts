export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(@uvvnet\.com\.br)/g;

export function isValidImageLink(link: string) : boolean {

    if (link == null || link == undefined) {
        return false;
    }

    if (link.endsWith('.png' || '.jpg') && link.startsWith('http://' || 'https://')){
        return true;
    } else {
        return false
    }
}

export function validateImageLink(link: string | null | undefined) : object {

    if (link == null || link == undefined) {
        return require('../../assets/icon.png')
    }

    if (link.endsWith('.png' || '.jpg') && link.startsWith('http://' || 'https://')){
        return { uri: link }
    } else {
        return require('../../assets/icon.png')
    }
}