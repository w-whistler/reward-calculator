import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import { rowsMock } from "./Table.mocks";

describe('components/Table', () => {
  it('should render correctly', () => {
    const colDefsMock = [{
      name: 'name1',
    }, {
      name: 'name2',
    }];
  
    render(
      <Table
        colDefs={colDefsMock}
        rows={rowsMock}
      />
    );

    colDefsMock.forEach(colDef => {
      expect(screen.getByText(colDef.name)).toBeInTheDocument();

      rowsMock.forEach(row => {
        expect(screen.getByText(row[colDef.name])).toBeInTheDocument();
      })
    })
  });

  it('should use custom renderer', () => {
    const colDefsMockWithCustomRenderer = [{
      name: 'name1',
      title: 'Name 1 Column',
      renderer: (value) => `Custom renderer ${value}`,
    }];

    render(
      <Table
        colDefs={colDefsMockWithCustomRenderer}
        rows={rowsMock}
      />
    );

    expect(screen.getByText(colDefsMockWithCustomRenderer[0].title)).toBeInTheDocument();
    rowsMock.forEach(row => {
      expect(screen.getByText(`Custom renderer ${row.name1}`)).toBeInTheDocument();
    });
  });
});
