import React from 'react';
import styled from 'styled-components';

export interface FSPColorPaletteProps {
  showHexValues?: boolean;
  showCSSVariables?: boolean;
  showUsageExamples?: boolean;
  compact?: boolean;
}

interface ColorGroup {
  name: string;
  colors: ColorItem[];
}

interface ColorItem {
  name: string;
  cssVar: string;
  hexValue: string;
  description?: string;
  usage?: string;
}

const colorGroups: ColorGroup[] = [
  {
    name: 'Grayscale',
    colors: [
      { name: 'Black', cssVar: '--black', hexValue: '#000000', description: 'Primary text', usage: 'Headings, body text' },
      { name: 'Gray 1', cssVar: '--gray1', hexValue: '#595959', description: 'Secondary text', usage: 'Labels, secondary content' },
      { name: 'Gray 2', cssVar: '--gray2', hexValue: '#8c8c8c', description: 'Disabled text', usage: 'Disabled states, placeholders' },
      { name: 'Gray 3', cssVar: '--gray3', hexValue: '#d9d9d9', description: 'Borders', usage: 'Input borders, dividers' },
      { name: 'Gray 4', cssVar: '--gray4', hexValue: '#f0f0f0', description: 'Background', usage: 'Card backgrounds, sections' },
      { name: 'Gray 5', cssVar: '--gray5', hexValue: '#fafafa', description: 'Page background', usage: 'Main page background' },
      { name: 'White', cssVar: '--white', hexValue: '#ffffff', description: 'Pure white', usage: 'Card content, modals' },
      { name: 'Border Gray', cssVar: '--borderGray', hexValue: '#e0e0e0', description: 'Standard border color', usage: 'Input borders, dividers' },
    ]
  },
  {
    name: 'Blues',
    colors: [
      { name: 'Default Blue', cssVar: '--blue', hexValue: '#1376CD', description: 'Primary brand color', usage: 'Buttons, links, active states' },
      { name: 'Dark Blue', cssVar: '--blue2', hexValue: '#0C4C85', description: 'Darker blue variant', usage: 'Hover states, active elements' },
      { name: 'Light Blue', cssVar: '--lightBlue', hexValue: '#E7F1FA', description: 'Light blue background', usage: 'List headers, highlights' },
    ]
  },
  {
    name: 'Greens',
    colors: [
      { name: 'Default Green', cssVar: '--green', hexValue: '#1F8446', description: 'Success states', usage: 'Success messages, completed states' },
      { name: 'Dark Green', cssVar: '--darkGreen', hexValue: '#0F4122', description: 'Dark green variant', usage: 'Success buttons, completed states' },
      { name: 'Light Green', cssVar: '--lightGreen', hexValue: '#E8F2EC', description: 'Light green background', usage: 'Success highlights' },
    ]
  },
  {
    name: 'Oranges',
    colors: [
      { name: 'Default Orange', cssVar: '--orange', hexValue: '#DC7418', description: 'Warning states', usage: 'Warnings, attention items' },
      { name: 'Dark Orange', cssVar: '--darkOrange', hexValue: '#994700', description: 'Dark orange variant', usage: 'Warning buttons, critical states' },
      { name: 'Light Orange', cssVar: '--lightOrange', hexValue: '#FBF1E7', description: 'Light orange background', usage: 'Warning highlights' },
    ]
  },
  {
    name: 'Reds',
    colors: [
      { name: 'Default Red', cssVar: '--red', hexValue: '#D72919', description: 'Error states', usage: 'Error messages, required fields' },
      { name: 'Dark Red', cssVar: '--darkRed', hexValue: '#6B140C', description: 'Dark red variant', usage: 'Error buttons, critical states' },
      { name: 'Light Red', cssVar: '--lightRed', hexValue: '#FBE9E8', description: 'Light red background', usage: 'Error highlights' },
    ]
  },
  {
    name: 'Purples',
    colors: [
      { name: 'Default Purple', cssVar: '--purple', hexValue: '#5200D8', description: 'Purple accent', usage: 'Special states, highlights' },
      { name: 'Medium Purple', cssVar: '--mediumPurple', hexValue: '#945CF0', description: 'Medium purple variant', usage: 'Purple buttons, secondary states' },
      { name: 'Light Purple', cssVar: '--lightPurple', hexValue: '#EDE2FF', description: 'Light purple background', usage: 'Purple highlights' },
    ]
  }
];

const PaletteContainer = styled.div<{ compact?: boolean }>`
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  padding: ${props => props.compact ? '16px' : '24px'};
  background-color: var(--white, #ffffff);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PaletteTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--black, #000000);
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--gray3, #d9d9d9);
`;

const ColorGroup = styled.div`
  margin-bottom: 32px;
`;

const GroupTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: var(--black, #000000);
  margin: 0 0 16px 0;
`;

const ColorGrid = styled.div<{ compact?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.compact ? '200px' : '280px'}, 1fr));
  gap: 16px;
`;

const ColorItem = styled.div<{ compact?: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray3, #d9d9d9);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--white, #ffffff);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`;

const ColorSwatch = styled.div<{ color: string }>`
  height: 80px;
  background-color: ${props => props.color};
  border-bottom: 1px solid var(--gray3, #d9d9d9);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.color === '#ffffff' && `
    border: 1px solid var(--gray3, #d9d9d9);
  `}
`;

const ColorInfo = styled.div<{ compact?: boolean }>`
  padding: ${props => props.compact ? '12px' : '16px'};
`;

const ColorName = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: var(--black, #000000);
  margin: 0 0 8px 0;
`;

const ColorValue = styled.div`
  font-size: 14px;
  color: var(--gray1, #595959);
  margin-bottom: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`;

const ColorDescription = styled.div`
  font-size: 12px;
  color: var(--gray1, #595959);
  margin-bottom: 4px;
  line-height: 1.4;
`;

const ColorUsage = styled.div`
  font-size: 11px;
  color: var(--gray2, #8c8c8c);
  font-style: italic;
  line-height: 1.3;
`;

const CSSVariable = styled.code`
  background-color: var(--gray5, #fafafa);
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--blue, #1976d2);
`;

const HexValue = styled.code`
  background-color: var(--gray5, #fafafa);
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 12px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: var(--green, #4caf50);
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  color: var(--black, #000000);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ColorSwatch}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const FSPColorPalette: React.FC<FSPColorPaletteProps> = ({
  showHexValues = true,
  showCSSVariables = true,
  showUsageExamples = true,
  compact = false
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <PaletteContainer compact={compact}>
      <PaletteTitle>FSP Color Palette</PaletteTitle>
      
      {colorGroups.map((group) => (
        <ColorGroup key={group.name}>
          <GroupTitle>{group.name}</GroupTitle>
          <ColorGrid compact={compact}>
            {group.colors.map((color) => (
              <ColorItem key={color.name} compact={compact}>
                <ColorSwatch color={color.hexValue}>
                  <CopyButton onClick={() => copyToClipboard(color.hexValue)}>
                    Copy
                  </CopyButton>
                </ColorSwatch>
                <ColorInfo compact={compact}>
                  <ColorName>{color.name}</ColorName>
                  
                  {showCSSVariables && (
                    <ColorValue>
                      CSS: <CSSVariable>{color.cssVar}</CSSVariable>
                    </ColorValue>
                  )}
                  
                  {showHexValues && (
                    <ColorValue>
                      HEX: <HexValue>{color.hexValue}</HexValue>
                    </ColorValue>
                  )}
                  
                  {color.description && (
                    <ColorDescription>{color.description}</ColorDescription>
                  )}
                  
                  {showUsageExamples && color.usage && (
                    <ColorUsage>Usage: {color.usage}</ColorUsage>
                  )}
                </ColorInfo>
              </ColorItem>
            ))}
          </ColorGrid>
        </ColorGroup>
      ))}
    </PaletteContainer>
  );
};
