import React from 'react'

const TableBody = props => {
    //Props now has character data bind to it
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    // Mustache to bind to templates
    return <tbody>{rows}</tbody>
}
export default TableBody;