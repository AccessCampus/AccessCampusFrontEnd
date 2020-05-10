import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import capitalizeCampusName from '../../utils/capitalizeCampusName';

const BuildingSelector = ({ campus }) => {
    const campusText = capitalizeCampusName(campus);
    const [personName, setPersonName] = useState([]);

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Ralph Hubbard1',
        'Ralph Hubbard2',
        'Ralph Hubbard3',
        'Ralph Hubbard4',
        'Ralph Hubbard5',
    ];

    const handleChangeMultiple = ({ target: options }) => {
        const value = [];
        for (option of options) {
            if (option.selected) value.push(option.value);
        }
        setPersonName(value);
    }

    return (
        <div className="campus-selector">
            <Select
                multiple
                native
                value={personName}
                onChange={handleChangeMultiple}
            >
                {names.map(name => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </Select>
        </div>
    );
}

export default BuildingSelector;