export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(@uvvnet\.com\.br)/g;

export function isValidImageLink(link: string) : boolean {

    if (!link) {
        return false;
    }

    if (['.png', '.jpg'].some(x => link.endsWith(x)) && ['http://', 'https://'].some(x => link.startsWith(x))){
        return true;
    } else {
        return false
    }
}

export function validateImageLink(link: string | null | undefined) : object {

    if (!link) {
        return require('../../assets/icon.png')
    }
    
    if (['.png', '.jpg'].some(x => link.endsWith(x)) && ['http://', 'https://'].some(x => link.startsWith(x))){
        return { uri: link }
    } else {
        return require('../../assets/icon.png')
    }
}