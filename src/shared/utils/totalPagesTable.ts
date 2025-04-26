export const totalPagesTable = (totalData: number, pageSize: number) => {
    return Math.ceil(totalData / pageSize);
}