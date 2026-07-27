import {SORT_OPTIONS, SORT_TYPES} from "../constants";
import type {SortDropDownProps} from "../types";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

export const SortDropDown = ({currentOption, currentType, onSort}: SortDropDownProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
                setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // const handleSelectSort = (option: SortOption) => {
    //     const type = currentType ? currentType : INITIAL_SORT_STATE.type;
    //     onSort(option, type);
    // };
    //
    // const handleSelectType = (type: SortType) => {
    //     const option = currentOption ? currentOption : INITIAL_SORT_STATE.sort;
    //     onSort(option, type);
    // };

    return (
        <DropDownContainer ref={dropdownRef}>
            <SortButton onClick={() => setIsOpen(!isOpen)}>
                Сортировать
            </SortButton>
            {isOpen && (
                <DropDownMenu>
                    {SORT_OPTIONS.map(option => (
                        <DropDownItem
                            onClick={() => onSort(option, currentType)}
                            key={option.value}
                            $isActive={currentOption?.value === option.value}
                        >
                            {option.label}
                        </DropDownItem>
                    ))}
                    <DropDownTypes>
                        {SORT_TYPES.map(type => (
                            <DropDownItem
                                onClick={() => onSort(currentOption, type)}
                                key={type.value}
                                $isActive={currentType?.value === type.value}
                            >
                                {type.label}
                            </DropDownItem>
                        ))}
                    </DropDownTypes>
                </DropDownMenu>
            )}
        </DropDownContainer>
    );
};

const DropDownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 250px;
`;
const DropDownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border-radius: 6px;
    margin-top: 4px;
    background: #fff;
    border: solid 1px #000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;


`;
const DropDownItem = styled.div<{ $isActive?: boolean }>`
    padding: 4px;
    border: solid 1px #000;
    cursor: pointer;
    background: ${({$isActive}) => ($isActive ? '#f0f7ff' : 'transparent')};
    color: ${({$isActive}) => ($isActive ? '#0066cc' : '#333')};
    font-weight: ${({$isActive}) => ($isActive ? '600' : '400')};

    &:hover {
        background: #f5f5f5;
    }

    &:first-child {
        border-radius: 6px 6px 0 0;
    }

    &:last-child {
        border-radius: 0 0 6px 6px;
    }
`;
const SortButton = styled.button`
    padding: 10px 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    gap: 8px;
    transition: all 0.2s;
    width: 100%;

    &:hover {
        background: #f5f5f5;
        border-color: #bbb;
    }
`;
const DropDownTypes = styled.div<{ $isActive?: boolean }>`
    margin-top: 10px;
`;