import './Table.css';

export const Table = ({
  colDefs,
  rows,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {colDefs.map(col => (
            <th key={col.name}>{col.title ? col.title : col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {colDefs.map(col => (
              <td key={col.name}>
                {col.renderer ? col.renderer(row[col.name], row) : row[col.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
};
