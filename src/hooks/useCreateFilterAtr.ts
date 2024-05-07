import { TableRow } from '../constants/tableFields'

export const useCreateFilterAtr = (dataList: TableRow[]) => {
	return (filterAtr: keyof TableRow) => {
		const result: TableRow[typeof filterAtr][] = []
		for (let index = 0; index < dataList.length; index++) {
			if (!result.includes(dataList[index][filterAtr])) {
				result.push(dataList[index][filterAtr])
			}
		}
		return result.sort().map(item => ({
			filterAtrName: item,
			active: false,
		}))
	}
}
