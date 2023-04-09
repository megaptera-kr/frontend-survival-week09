// TODO: numberFormat 유틸 함수
export default function numberFormat(value: number) {
  return new Intl.NumberFormat().format(value);
}
