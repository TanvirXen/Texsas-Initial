import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Brands.module.scss";
import ProductCard from "../../Components/ProductCard";
import sanity from "../../lib/sanity";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Head from "next/head";

const product = `*[_type=="product"]{...,'category': category[]->,'auxProduct': product[]->,brand->}`;
const categorys = '*[_type=="category"]';
const brand = '*[_type=="brand"]';
function Products(props) {
	let data = Object.values(props.products);
const [datas, setdatas] = useState(data)
const [selectedC, setselectedC] = useState('')
const [selectedB, setselectedB] = useState('')
	function sortC(e) {
		let s = [];
		data.filter((element) => {
			for (let i = 0; i < element.category.length; i++) {
				if (element.category[i].title == e) {
					s.push(element);
				}
			}
		});
    setdatas(s)
	}
	function sortB(e) {
		let s = [];
		data.filter((element) => {
			if (element.brand.name == e) {
				s.push(element);
			}
		});
    setdatas(s)
	}

	return (
		<div>
			<Head>
				<title>TEXSAS- Products </title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="preconnect" href="https://vitals.vercel-insights.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<meta name = "keywords" content = "Texsas, Texsas Engineering,Textile Machines Bangladesh,Textile Bangladesh,Textile Machines BD,Texsas BD,Texsas Bangladesh,Digital Printing Machine,Homer Digital Printing,Sublimation Printing,Digital Printing video, Reactive Digital Printing,Dosun Laser Engraving Machine,Laser Engraving Machine,Rotary Laser engraver Machine,Flatebed Laser engraving machine,3D laser engraving machine,Inkjet Engraver Machine,Found Washing Machine,Reactive washing machine,Knit fabrics washing machine,Knit fabrics continous bleaching machine,Continous washing machine, Flatebed printing machine,Rotary printing machine ,Huisheng flatbed printing machine,Neostampa RIP Software,Textile Machines bd" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.texsasbd.com/" />
				<meta property="og:title" content="Texas- Products" />
				<meta
					property="og:description"
					content="Connecting you to the world’s leading Textile Solutions with top class service."
				/>
				<meta property="og:image" content="/meta.png" />
			</Head>
			<div className="brandHero">
				<Container maxWidth="xl">
					<Typography
						variant="h2"
						color="secondary.dark"
						className={
							styles.hero + " " + "animate__animated animate__bounceInLeft"
						}
					>
						Products
					</Typography>
				</Container>
			</div>
			<Container maxWidth="xl" className={styles.hero1}  style={{paddingBottom:'40px'}}>
				<Grid container spacing={1} direction="row">
					<Grid xs={12} sm={12} md={4} lg={3} xl={3}>
						<Accordion
							style={{
								marginRight: "10px",
								marginBottom: "10px",
								border: "none",
								boxShadow: "none",
								borderRadius: "0px",
								width: "100%",
								paddingRight: "10px",
							}}
							elevation={0}
							sx={{
								"&:before": {
									display: "none",
								},
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon style={{ color: "#0bba60" }} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
								style={{
									borderBottom: "2px solid #D0D0D0",
									boxShadow: "none",
									width: "80%",
								}}
							>
								<Typography variant="body1">Sort By Brand</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{props.brands.map((e) => {
									return (
										<Typography
											key={e.name}
											color={selectedB==e.name ?'#0bba60':'black.main'}
											variant="h6"
											style={{
												boxShadow: " 0px 2px 0px #D0D0D0",
												paddingBottom: "3px",
												paddingTop: "3px",
												paddingLeft: "16px",
												cursor:'pointer'
											}}
											onClick={()=>{
												setselectedC('')
												setselectedB(e.name)
												sortB(e.name)
											}}
										>
											{e.name.toUpperCase()}
										</Typography>
									);
								})}
							</AccordionDetails>
						</Accordion>
						<Accordion
							style={{
								marginRight: "10px",
								marginBottom: "10px",
								border: "none",
								boxShadow: "none",
								borderRadius: "0px",
								marginTop: "10px",
								width: "100%",
								paddingRight: "10px",
							}}
							elevation={0}
							sx={{
								"&:before": {
									display: "none",
								},
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon style={{ color: "#0bba60" }} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
								style={{
									borderBottom: "2px solid #D0D0D0",
									boxShadow: "none",
									width: "80%",
								}}
							>
								<Typography variant="body1">Sort By Category</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{props.category.map((e) => {
									return (
										<Typography
											key={e.title}
											color={selectedC==e.title ?'#0bba60':'black.main'}
											variant="h6"
											style={{
												boxShadow: " 0px 2px 0px #D0D0D0",
												paddingBottom: "3px",
												paddingTop: "3px",
												paddingLeft: "16px",
												cursor:'pointer'
											}}
											onClick={()=>{
												setselectedB('')
												setselectedC(e.title)
												sortC(e.title)
											}}
										>
											{e.title.toUpperCase()}
										</Typography>
									);
								})}
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid
						container
						spacing={4}
						direction="row"
						xs={12}
						sm={12}
						md={8}
						lg={9}
						xl={9}
					>
						 {datas.length==0? <div>
<Typography variant="h3" color="initial" style={{paddingLeft:'30px',paddingBottom:'50px'}}>No Products Found</Typography>
						</div>:
						 datas.map((e) => {
							return (
								<ProductCard
									image={e.mainImage}
									key={e.model}
									title={e.model}
									description={e.sdescription}
									logo={e.brand.logo}
									slug={e.slug.current}
								/>
							);
						})
						
						
}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
export const getStaticProps = async () => {
	const products = await sanity.fetch(product);
	const category = await sanity.fetch(categorys);
	const brands = await sanity.fetch(brand);
	return {
		props: { products: products, category: category, brands: brands },
		revalidate: 100, // In seconds
	};
};
export default Products;
