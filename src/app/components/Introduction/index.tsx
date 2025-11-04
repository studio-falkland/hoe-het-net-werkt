import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './index.module.css';
import cn from '@/lib/cn';
import ExportedImage from 'next-image-export-optimizer';

import grandpa from './images/grandpa.png';
import ixp from './images/ixp.png';
import lighthouse from './images/lighthouse.png';
import tours from './images/tours.png';
import trainstation from './images/trainstation.png';
import TextBox from '../TextBox';

export default function Introduction() {
    return (
        <>
            <TextBox className="max-w-2xl mx-auto">
                <div className="font-medium text-xl text-center">
                    <h1>
                        We gebruiken
                        {' '}
                        <span className="font-bold">het internet</span>
                        {' '}
                        elke dag.
                    </h1>
                    <h1>
                        Maar hoe werkt het eigenlijk?
                    </h1>
                </div>
            </TextBox>
            <div className="flex items-center justify-center mx-auto gap-8 mt-12 text-center text-lg">
                <a
                    href="#story"
                    className="border bg-white border-[#D7DCED] hover:border-[#B2B6D8] p-4 w-64 h-64 block rounded-lg relative hover:scale-[1.01] hover:-translate-y-1 transition-transform shadow hover:shadow-lg"
                >
                    <ExportedImage
                        src={grandpa}
                        alt="Grandpa"
                        className="w-64 h-[320px] absolute bottom-0 left-0 right-0 object-cover rounded-b-lg"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-white rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                        <p className="font-semibold">Lees het verhaal</p>
                        <p className="text-xs text-gray-500">&hellip; en leer over de protocollen, organisaties en infrastructuur die het internet mogelijk maken.</p>
                    </div>
                </a>
                <a
                    href="#visualisations"
                    className="border border-[#D7DCED] hover:border-[#B2B6D8] p-4 w-64 h-64 block rounded-lg relative bg-white shadow hover:shadow-lg hover:scale-[1.01] hover:-translate-y-1 transition-transform group"
                >
                    <div className="grid grid-cols-2 gap-2 w-full h-full">
                        <div className="relative border-[#D7DCED] group-hover:border-[#B2B6D8] bg-white shadow border rounded-sm">
                            <ExportedImage
                                src={ixp}
                                alt="Internet"
                                className="w-full h-[120px] absolute bottom-0 left-0 right-0 object-cover rounded-b-md"
                            />
                        </div>
                        <div className="relative border-[#D7DCED] group-hover:border-[#B2B6D8] bg-white shadow border rounded-sm">
                            <ExportedImage
                                src={lighthouse}
                                alt="Internet"
                                className="w-full h-[120px] absolute bottom-0 left-0 right-0 object-cover rounded-b-md"
                            />
                        </div>
                        <div className="relative border-[#D7DCED] group-hover:border-[#B2B6D8] bg-white shadow border rounded-sm">
                            <ExportedImage
                                src={tours}
                                alt="Internet"
                                className="w-full h-[120px] absolute bottom-0 left-0 right-0 object-cover rounded-b-md"
                            />
                        </div>
                        <div className="relative border-[#D7DCED] group-hover:border-[#B2B6D8] bg-white shadow border rounded-sm">
                            <ExportedImage
                                src={trainstation}
                                alt="Internet"
                                className="w-full h-[120px] absolute bottom-0 left-0 right-0 object-cover rounded-b-md"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-white rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                        <p className="font-semibold">Bekijk de visualisaties</p>
                        <p className="text-xs tracking-wide text-gray-500">Een database met rijke visualisaties van en over het internet.</p>
                    </div>
                </a>
            </div>
        </>
    );
}
