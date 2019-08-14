import React, { Component } from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

class Table extends Component {
    render() {
        //Passing data down similair to jQuery data-attributes
        const { characterData, removeCharacter } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table