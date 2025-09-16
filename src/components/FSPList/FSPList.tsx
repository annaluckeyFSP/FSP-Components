import React from 'react';
import styled from 'styled-components';

export interface ListItem {
  id: string;
  text: string;
  secondaryText?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  active?: boolean;
  leftBorder?: 'green' | 'blue' | 'red' | 'orange';
  draggable?: boolean;
  onClick?: () => void;
}

export interface FSPListProps {
  items: ListItem[];
  header?: string;
  variant?: 'default' | 'button-list' | 'checkbox-list' | 'action-list';
  className?: string;
  onItemClick?: (item: ListItem, index: number) => void;
  onItemAction?: (item: ListItem, index: number) => void;
}

const ListContainer = styled.ul<{ variant?: string }>`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.variant === 'checkbox-list' && `
    padding-top: 0;
  `}
`;

const ListHeader = styled.div`
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  background-color: var(--lightBlue, #e7f1fa);
  padding: 8px 20px 8px 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`;

const ListItem = styled.li<{ 
  active?: boolean; 
  leftBorder?: string; 
  clickable?: boolean;
  variant?: string;
}>`
  height: auto;
  box-sizing: border-box;
  border-bottom: 1px solid var(--borderGray, #d8d8d8);
  padding: 0;
  background-color: var(--white, #ffffff);
  transition: background-color 0.2s ease;
  
  &:first-of-type {
    border-top: 1px solid var(--borderGray, #d8d8d8);
  }
  
  ${props => props.clickable && `
    cursor: pointer;
    
    &:hover {
      background: var(--gray4, #f5f5f5);
    }
  `}
  
  ${props => props.active && `
    background: var(--blue, #1374c9);
    color: var(--white, #ffffff);
    
    &.green {
      background: var(--green, #1f8446);
    }
  `}
  
  ${props => props.leftBorder && `
    .list-item-content {
      border-left: 3px solid var(--${props.leftBorder}, #1f8446);
    }
  `}
  
  ${props => props.variant === 'action-list' && `
    .list-item-content {
      padding: 0 0 0 20px;
      
      .list-item-wrapper {
        padding: 15px 10px;
        
        &.list-item-with-button {
          padding: 0px 0px 0px 10px;
        }
        
        &.list-item-with-toggle {
          padding: 7px 10px;
        }
      }
    }
  `}
`;

const ListItemContent = styled.div<{ variant?: string }>`
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  min-height: 40px;
  
  ${props => props.variant === 'action-list' && `
    padding: 0 0 0 20px;
  `}
`;

const ListItemWrapper = styled.div<{ variant?: string }>`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  
  > :first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  ${props => props.variant === 'checkbox-list' && `
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  line-height: 31px;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  
  .display-name-container {
    padding-left: 0px;
  }
  
  .display-name {
    font-weight: bold;
    text-wrap: wrap;
  }
  
  .default-label {
    font-weight: bold;
    margin-top: 3px;
  }
`;

const ItemText = styled.div<{ variant?: string }>`
  font-size: 14px;
  line-height: 16px;
  color: inherit;
  
  ${props => props.variant === 'button-list' && `
    font-weight: bold;
    text-wrap: wrap;
  `}
`;

const SecondaryText = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  margin-top: 2px;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`;

const DraggableIcon = styled.div`
  padding: 0 10px;
  cursor: move;
  color: var(--gray2, #919191);
  
  &:hover {
    color: var(--black, #000000);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  
  input[type="checkbox"] {
    margin: 0 10px 0 0;
  }
`;

export const FSPList: React.FC<FSPListProps> = ({
  items,
  header,
  variant = 'default',
  className,
  onItemClick,
}) => {
  const handleItemClick = (item: ListItem, index: number) => {
    if (item.onClick) {
      item.onClick();
    } else if (onItemClick) {
      onItemClick(item, index);
    }
  };

  return (
    <ListContainer variant={variant} className={className}>
      {header && <ListHeader>{header}</ListHeader>}
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          active={item.active}
          leftBorder={item.leftBorder}
          clickable={!!(item.onClick || onItemClick)}
          variant={variant}
          onClick={() => handleItemClick(item, index)}
        >
          <ListItemContent variant={variant}>
            <ListItemWrapper variant={variant}>
              <LeftContainer>
                {item.draggable && (
                  <DraggableIcon>⋮⋮</DraggableIcon>
                )}
                {variant === 'checkbox-list' && (
                  <CheckboxContainer>
                    <input type="checkbox" />
                  </CheckboxContainer>
                )}
                {item.icon && <span>{item.icon}</span>}
                <div>
                  <ItemText variant={variant}>{item.text}</ItemText>
                  {item.secondaryText && (
                    <SecondaryText>{item.secondaryText}</SecondaryText>
                  )}
                </div>
              </LeftContainer>
              {item.actions && (
                <ItemActions onClick={(e) => e.stopPropagation()}>
                  {item.actions}
                </ItemActions>
              )}
            </ListItemWrapper>
          </ListItemContent>
        </ListItem>
      ))}
    </ListContainer>
  );
};

// Specialized list components
export const FSPButtonList: React.FC<Omit<FSPListProps, 'variant'>> = (props) => (
  <FSPList {...props} variant="button-list" />
);

export const FSPCheckboxList: React.FC<Omit<FSPListProps, 'variant'>> = (props) => (
  <FSPList {...props} variant="checkbox-list" />
);

export const FSPActionList: React.FC<Omit<FSPListProps, 'variant'>> = (props) => (
  <FSPList {...props} variant="action-list" />
);
