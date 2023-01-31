const getTotalSales = (stats) => {
    return stats.reduce((count, day) => count + day.money, 0).toFixed(2);
}

const getOccupancyPercentage = (stats) => {
    return (stats.reduce((count, day) => count + day.percentage, 0) / stats.length).toFixed(2);
}

const getMaxSales = (stats) => {
    if (stats) {
        const sales = stats.map((day) => day.money);
        return Math.max(...sales);
    } else {
        return 0
    }
}

export {
    getTotalSales,
    getOccupancyPercentage,
    getMaxSales
};
