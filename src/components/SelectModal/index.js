import { createWithRemoteLoader } from '@kne/remote-loader';
import { Row, Col, Space, Tag, Checkbox } from 'antd';
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import classnames from 'classnames';

import style from './style.module.scss';

const ModalInner = createWithRemoteLoader({
  modules: ['Table@TablePage', 'ConfirmButton', 'Common@SearchInput']
})(
  forwardRef(({ remoteModules, searchRender, defaultValue, labelKey, getCheckboxDisabled, ...props }, ref) => {
    const [TablePage, ConfirmButton, SearchInput] = remoteModules;
    const [value, setValue] = useState(defaultValue || []);
    const [searchHeight, setSearchHeight] = useState(0);
    const searchRef = useRef(null);
    const tableRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
      const searchEl = searchRef.current;
      setSearchHeight(searchEl.clientHeight);
      const resizeObserver = new ResizeObserver(() => {
        setSearchHeight(searchEl.clientHeight);
      });
      resizeObserver.observe(searchEl);
      return () => {
        resizeObserver.unobserve(searchEl);
      };
    }, []);
    const getRowValue = item => (typeof props.rowKey === 'function' ? props.rowKey(item) : item[props.rowKey]);
    useImperativeHandle(
      ref,
      () => {
        return {
          getValue: () => value
        };
      },
      [value]
    );

    const rowIsDisabled = record => (typeof getCheckboxDisabled === 'function' ? getCheckboxDisabled(record) : record.disabled);
    return (
      <Row wrap={false} gutter={10}>
        <Col span={18}>
          <Space direction="vertical" block size={searchHeight ? 8 : 0}>
            <div ref={searchRef}>
              {searchRender &&
                searchRender({
                  value,
                  setValue,
                  getFetchApi: () => tableRef.current
                })}
            </div>
            <TablePage
              {...props}
              ref={tableRef}
              controllerOpen={false}
              scroll={{
                y: `calc(var(--modal-height) - 152px - ${searchHeight ? searchHeight + 8 : 0}px)`
              }}
              rowClassName={record => {
                return classnames({
                  [style['row-disabled']]: rowIsDisabled(record)
                });
              }}
              rowSelection={{
                selectedRowKeys: value.map(getRowValue),
                getCheckboxProps: record => {
                  return {
                    disabled: rowIsDisabled(record)
                  };
                },
                renderCell: (checked, record) => {
                  const recordKey = getRowValue(record);
                  return (
                    <Checkbox
                      checked={checked}
                      disabled={rowIsDisabled(record)}
                      onChange={() => {
                        setValue(value => {
                          const newValue = value.slice(0);
                          const index = newValue.findIndex(item => getRowValue(item) === recordKey);
                          if (!checked) {
                            index > -1 ? newValue.splice(index, 1, record) : newValue.push(record);
                          } else {
                            index > -1 && newValue.splice(index, 1);
                          }
                          return newValue;
                        });
                      }}
                    />
                  );
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                  setValue(value => {
                    return selected ? value.concat(changeRows) : value.filter(item => changeRows.findIndex(target => getRowValue(target) === getRowValue(item)) === -1);
                  });
                }
              }}
            />
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical" block>
            <Row justify="space-between">
              <Col>已选:{value && value.length > 0 ? `(${value.length})` : ''}</Col>
              <Col>
                <ConfirmButton
                  isDelete
                  type="text"
                  size="small"
                  disabled={!(value && value.length > 0)}
                  onClick={() => {
                    setValue([]);
                  }}
                >
                  全部移除
                </ConfirmButton>
              </Col>
            </Row>
            <SearchInput
              value={searchText}
              placeholder="搜索"
              onSearch={value => {
                setSearchText(value);
              }}
            />
            <Space wrap>
              {value
                .filter(item => !searchText || (typeof labelKey === 'function' ? labelKey(item) : item[labelKey]).indexOf(searchText) > -1)
                .map(item => (
                  <Tag
                    closable
                    onClose={() => {
                      setValue(value => {
                        const newValue = value.slice(0);
                        const index = newValue.indexOf(item);
                        if (index > -1) {
                          newValue.splice(index, 1);
                        }
                        return newValue;
                      });
                    }}
                    key={typeof props.rowKey === 'function' ? props.rowKey(item) : item[props.rowKey]}
                  >
                    {typeof labelKey === 'function' ? labelKey(item) : item[labelKey]}
                  </Tag>
                ))}
            </Space>
          </Space>
        </Col>
      </Row>
    );
  })
);

ModalInner.defaultProps = {
  rowKey: 'id',
  labelKey: 'name'
};

const SelectModal = createWithRemoteLoader({
  modules: ['Modal@useModal']
})(({ remoteModules, children, ...props }) => {
  const [useModal] = remoteModules;
  const ref = useRef(null);
  const modal = useModal();
  return children({
    modal: ({ onConfirm, defaultValue, ...modalProps }) =>
      modal(
        Object.assign({}, modalProps, {
          children: <ModalInner {...props} defaultValue={defaultValue} ref={ref} />,
          onConfirm: () => {
            return onConfirm && onConfirm(ref.current.getValue());
          }
        })
      )
  });
});

export default SelectModal;
