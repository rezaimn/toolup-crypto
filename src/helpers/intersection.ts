export default function intersection(arr: any[], ...args: any[]) {
    return arr.filter(item => args.every(arr => arr.includes(item)));
}
