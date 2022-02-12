function useSelect(items) {
    const SelectItems = Object.keys(items).map((key) => {
        return items[key].items[0];
    });
    return SelectItems;
}


export default useSelect;