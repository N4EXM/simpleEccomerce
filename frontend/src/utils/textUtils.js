export function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

export function GBP_format(price) {
    const priceFormatted = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(price)

    return priceFormatted
}