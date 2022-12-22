import { useState, useEffect } from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ObjectDetection from "./Detection";
import { nutritionData } from "./nutritionData";
import NutritionChart from "./NutritionChart";

import "./DetectionWrapper.css";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function DetectionWrapper() {
	const [detectedResults, setDetectedResults] = useState([]);
	const [detectedFood, setDetectedFood] = useState([]);

	// useEffect(() => {
	// 	const detectedLabels = detectedResults.map((row) => row.label);
	// 	const labels = [...new Set(detectedLabels)];
	// 	const food = nutritionData.filter((row) => labels.includes(row.foodType));

	// 	console.log("FOOD:", food);
	// }, [detectedResults]);

	return (
		<>
			{/* Background color split screen for large screens */}
			<div className="fixed top-0 left-0 h-full w-1/2 bg-white" aria-hidden="true" />
			<div className="fixed top-0 right-0 h-full w-1/2 bg-gray-50" aria-hidden="true" />
			<div className="relative flex min-h-screen flex-col">
				{/* Navbar */}
				<Disclosure as="nav" className="flex-shrink-0 border-y-2 bg-white">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
								<div className="relative flex h-16 items-center justify-between">
									{/* Logo section */}
									<div className="flex items-center px-2 lg:px-0 xl:w-64">
										<div className="flex-shrink-0">
											<img className="h-8 w-auto" src="/images/logo_theyta_01_colour.png" alt="TheyTa Limited" />
										</div>
									</div>

									{/* Search section */}
									<div className="flex flex-1 justify-center lg:justify-end">
										<div className="w-full px-2 lg:px-6">
											<label htmlFor="search" className="sr-only">
												Search Articles
											</label>
											<div className="relative text-white focus-within:text-gray-400">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
													<MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
												</div>
												<input
													id="search"
													name="search"
													className="block w-full rounded-md border border-transparent bg-slate-700 bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-600 focus:outline-none focus:ring-0 sm:text-sm"
													placeholder="Search articles"
													type="search"
												/>
											</div>
										</div>
									</div>
									<div className="flex lg:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
											)}
										</Disclosure.Button>
									</div>
									{/* Links section */}
									<div className="hidden lg:block lg:w-80">
										<div className="flex items-center justify-end">
											<div className="flex">
												<a
													href="#"
													className="text-md rounded-md px-3 py-2 font-medium text-slate-400 hover:text-indigo-400"
												>
													Hottest Topic
												</a>
											</div>
											{/* Profile dropdown */}
											<Menu as="div" className="relative ml-4 flex-shrink-0">
												<div>
													<Menu.Button className="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
														<span className="sr-only">Open user menu</span>
														<img
															className="h-8 w-8 rounded-full"
															src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
															alt=""
														/>
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	View Profile
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Settings
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Logout
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="lg:hidden">
								<div className="px-2 pt-2 pb-3">
									<Disclosure.Button
										as="a"
										href="#"
										className="block rounded-md bg-indigo-800 px-3 py-2 text-base font-medium text-white"
									>
										Dashboard
									</Disclosure.Button>
									<Disclosure.Button
										as="a"
										href="#"
										className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
									>
										Support
									</Disclosure.Button>
								</div>
								<div className="border-t border-indigo-800 pt-4 pb-3">
									<div className="px-2">
										<Disclosure.Button
											as="a"
											href="#"
											className="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
										>
											Your Profile
										</Disclosure.Button>
										<Disclosure.Button
											as="a"
											href="#"
											className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
										>
											Settings
										</Disclosure.Button>
										<Disclosure.Button
											as="a"
											href="#"
											className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
										>
											Sign out
										</Disclosure.Button>
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<div className="flex-col md:flex md:flex-row">
					<div className="flex basis-1/2 justify-center">
						<ObjectDetection
							setDetectedResults={setDetectedResults}
							setDetectedFood={setDetectedFood}
							className="mx-0"
						/>
					</div>
					<div className="m-2 basis-1/2 p-5">
						{/* <ul>
							Detected Food:
							{detectedResults.map((obj, idx) => (
								<li key={idx}>
									<span className="mr-5 font-semibold">{obj.label}</span>{" "}
									<span>{(obj.confidence * 100).toFixed(2)}%</span>
								</li>
							))}
						</ul> */}

						<div className="flex justify-center border-t-4">
							<div>
								{/* <NutritionChart chartContent={nutritionData[4]} />
								<NutritionChart chartContent={nutritionData[3]} /> */}
								{detectedFood.map((data, idx) => (
									<NutritionChart chartContent={data} key={idx} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
