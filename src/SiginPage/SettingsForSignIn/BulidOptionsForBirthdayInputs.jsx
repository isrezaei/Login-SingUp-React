export const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const Days = () =>
{
    let Number = []
    for (let i = 1 ; i <= 31 ; i++)
    {
        Number.push(i)
    }

    return Number
}

export const Years = () =>
{
    let Number = []
    for (let i = 1901 ; i <= 2022 ; i++)
    {
        Number.push(i)
    }

    return Number.reverse()
}
