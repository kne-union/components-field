import useControlValue from '@kne/use-control-value';
import { createWithRemoteLoader } from '@kne/remote-loader';
import { App, Button, Space } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import style from './style.module.scss';

const BatchSelectField = createWithRemoteLoader({
  modules: ['components-core:ConfirmButton', 'components-core:Icon', 'components-core:Table']
})(({ remoteModules, className, onAdd, disabled, minLength, showAdd, showBatchDelete, showDelete, showRowSelection, ...props }) => {
  const [ConfirmButton, Icon, TablePage] = remoteModules;

  const [value, setValue] = useControlValue(props);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const { columns: baseColumns } = props;

  const columns = disabled
    ? baseColumns
    : [
        ...baseColumns,
        ...(showDelete
          ? [
              {
                title: '操作',
                type: 'options',
                valueOf: item => [
                  {
                    children: '删除',
                    confirm: true,
                    onClick: () => {
                      const itemKey = typeof props.rowKey === 'function' ? props.rowKey(item) : item[props.rowKey];
                      setValue(value => {
                        const newValue = value.slice(0);
                        const index = newValue.findIndex(target => (typeof props.rowKey === 'function' ? props.rowKey(target) : target[props.rowKey] === itemKey));
                        if (index > -1) {
                          newValue.splice(index, 1);
                        }
                        return newValue;
                      });
                      setSelectedKeys(keys => {
                        const newKeys = keys.slice(0);
                        const index = newKeys.indexOf(itemKey);
                        if (index > -1) {
                          newKeys.splice(index, 1);
                        }
                        return newKeys;
                      });
                    }
                  }
                ]
              }
            ]
          : [])
      ];

  const { message } = App.useApp();
  return (
    <div className={classnames(className, style['batch-select'])}>
      {showAdd || showBatchDelete ? (
        <Space className={style['options']}>
          {showBatchDelete && (
            <ConfirmButton
              type="text"
              isDelete
              size="small"
              disabled={disabled || !(value && value.length > 0 && selectedKeys.length > 0) || (minLength && selectedKeys.length > value.length - minLength)}
              onClick={() => {
                setValue(value => {
                  return value.slice(0).filter(item => {
                    return selectedKeys.indexOf(typeof props.rowKey === 'function' ? props.rowKey(item) : item[props.rowKey]) === -1;
                  });
                });
                setSelectedKeys([]);
              }}
            >
              批量删除
            </ConfirmButton>
          )}
          {showAdd && (
            <Button
              icon={<Icon type="icon-tianjia" />}
              size="small"
              type="text"
              disabled={disabled}
              onClick={() => {
                onAdd &&
                  onAdd(value, newValue => {
                    if (minLength && newValue.length < minLength) {
                      message.info(`至少保留${minLength}条数据`);
                      return false;
                    }
                    setValue(newValue);
                  });
              }}
            >
              添加
            </Button>
          )}
        </Space>
      ) : null}
      <TablePage
        controllerOpen={props.controllerOpen}
        featureId={props.featureId}
        className="table-page"
        size="small"
        pagination={false}
        rowKey={props.rowKey}
        columns={columns}
        dataSource={value}
        rowSelection={
          !disabled &&
          showRowSelection && {
            type: 'checkbox',
            selectedRowKeys: selectedKeys,
            onChange: keys => {
              setSelectedKeys(keys);
            }
          }
        }
      />
    </div>
  );
});

BatchSelectField.defaultProps = {
  value: [],
  rowKey: 'id',
  showAdd: true,
  showDelete: true,
  showBatchDelete: true,
  showRowSelection: true
};

const BatchSelect = createWithRemoteLoader({
  modules: ['FormInfo@hooks']
})(({ remoteModules, ...props }) => {
  const [hooks] = remoteModules;
  const { useOnChange } = hooks;
  const render = useOnChange(props);
  return render(BatchSelectField);
});

BatchSelect.Field = BatchSelectField;

export default BatchSelect;
