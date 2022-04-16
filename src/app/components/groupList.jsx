import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const isArray = Array.isArray(items)

    return (
        <ul className="list-group">
            {!isArray
                ? Object.keys(items).map((item) => (
                      <li
                          onClick={() => onItemSelect(items[item])}
                          role="button"
                          key={items[item][valueProperty]}
                          className={
                              'list-group-item' +
                              (items[item] === selectedItem ? ' active' : '')
                          }
                      >
                          {items[item][contentProperty]}
                      </li>
                  ))
                : items.map((item) => (
                      <li
                          onClick={() => onItemSelect(item)}
                          role="button"
                          key={item[valueProperty]}
                          className={
                              'list-group-item' +
                              (item === selectedItem ? ' active' : '')
                          }
                      >
                          {item[contentProperty]}
                      </li>
                  ))}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
}

export default GroupList
