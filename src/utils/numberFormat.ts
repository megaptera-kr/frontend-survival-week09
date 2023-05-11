const numberFormat = (number: number): string => new Intl.NumberFormat().format(number);

export default numberFormat;
