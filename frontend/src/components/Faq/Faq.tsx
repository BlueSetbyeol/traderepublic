import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Faq() {
  return (
    <section className="faq_section">
      <h2 className="title_section_faq">FAQ</h2>
      <article className="q-and-a">
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Qui peut ouvrir un compte ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              textAlign: "left",
            }}
          >
            <Typography sx={{ mb: 2 }}>
              Pour ouvrir un compte Trade Republic, vous devez répondre aux
              critères suivants : Vous possédez un smartphone (système
              d'exploitation iOS ou Android). Vous êtes âgé d'au moins 18 ans et
              avez votre résidence permanente en France avec une obligation
              fiscale en France. Vous disposez d'un numéro de téléphone portable
              européen et d'un compte bancaire SEPA.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Comment pouvez-vous proposer des frais si bas ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Au cours des cinq dernières années, nous avons construit une
              puissante institution financière digitale avec une technologie
              moderne. Comme beaucoup d'autres courtiers, nous recevons des
              rabais de nos partenaires. En conséquence, nous pouvons vous
              libérer des commissions d'ordre élevées grâce à nos structures
              efficaces. Lors de la passation d'un ordre, les investissements
              programmés sont exempts de frais de courtage et il y a un euro
              pour les transactions uniques plus les coûts tiers et le spread,
              mais pas de commission d'ordre.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Toutes les cartes Trade Republic sont exemptes de souscription.
              Vous avez le choix entre une carte virtuelle (gratuite), une carte
              classique (paiement unique de 5 €) et une carte miroir (paiement
              unique de 50 €). Trade Republic ne facture pas de frais pour les
              transactions ou tout retrait au distributeur supérieur à 100 €.
              Pour les transactions non-euro, sans frais supplémentaires sur les
              taux de change bancaires.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Comment obtenir des intérêts ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Activez les 2 % d'intérêts annuel avec votre compte courant Trade
              Republic et recevez des intérêts chaque mois sur vos espèces, sans
              limite. Profitez d'une flexibilité totale pour retirer des fonds à
              tout moment. Les intérêts sont calculés quotidiennement et payés
              chaque mois. Vous pouvez retirer vos fonds à tout moment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Quels produits proposez-vous ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Avec Trade Republic, recevez 2 % d'intérêts bruts annuels sur
              votre compte courant français, sans plafond. Obtenez votre carte
              sans souscription mensuelle pour dépenser et recevoir 1 % de
              Saveback directement dans votre plan d'épargne. Avec Trade
              Republic, vous pouvez également investir et épargner. Investissez
              avec seulement 1 € dans des actions et ETFs, des obligations
              d'entreprises et gouvernementales, des cryptos et des produits
              dérivés ou faites de l'épargne une habitude en mettant en place un
              plan d'épargne sans frais de courtage.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Qu'est-ce qu'un Plan d'Épargne en Actions (PEA) ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Le Plan d'Épargne en Actions (PEA) est une enveloppe fiscale
              utilisée par 7 millions de Français. Avec le PEA, investissez
              jusqu'à 150 000 € avec des plus-values exonérées d'impôt sur le
              revenu dans des ETF et actions européens, après avoir conservé
              votre PEA pendant 5 ans. Trade Republic propose le premier PEA
              sans frais sur les plans d'épargne.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Êtes-vous une banque ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Trade Republic est une banque allemande de plein exercice. Nous
              sommes supervisés par la BaFin (Autorité fédérale de surveillance
              financière) et nous vous offrons la fiabilité et la sécurité
              habituelles d'une banque allemande. La conservation et
              l'administration d'instruments financiers pour le compte de
              clients disposant d'un compte de dépôt auprès de la succursale
              française, la prise de dépôts avec un compte IBAN français,
              l'exécution d'ordres pour le compte de clients (courtage) ainsi
              que l'offre du Plan d'Epargne en Actions (PEA) sont effectuées par
              Trade Republic Bank GmbH par l'intermédiaire de sa succursale
              française, dénommée Trade Republic Bank GmbH, Succursale France
              sur la base du régime de la liberté d'établissement. Trade
              Republic Bank GmbH, Succursale France opère sous le contrôle de
              l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) et de
              l'Autorité des Marchés Financiers (AMF). Tous les services offerts
              par Trade Republic Bank GmbH autres que ceux mentionnés ci-dessus
              (par exemple les services de paiement) sont fournis sur la base du
              régime de libre prestation de services (transfrontalier) par Trade
              Republic Bank GmbH.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Il existe également des clients Français pour lesquels Trade
              Republic Bank GmbH fournit tous les services sur une base
              transfrontalière de libre prestation de services. Ces clients
              n'ont pas d'IBAN français et ne peuvent pas encore utiliser les
              produits et les avantages locaux. La raison en est, par exemple,
              qu'ils n'ont pas encore fourni leur NIF ou qu'ils n'ont pas encore
              été invités à activer un IBAN français. Cette mesure sera mise en
              œuvre progressivement au cours des prochaines semaines.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              L'argent que vous versez est conservé sur l'un de nos comptes
              fiduciaires omnibus auprès de banques également autorisées à
              effectuer des dépôts. Il s'agit actuellement de Deutsche Bank AG,
              J.P. Morgan SE, HSBC Continental Europe S.A et Citibank Europe
              plc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                textTransform: "none",
              }}
            >
              Comment mon argent est-il protégé ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 }}>
              Vos versements en espèces sont répartis entre des banques
              partenaires, telles que Deutsche Bank ou J.P. Morgan et pour des
              soldes plus élevés, ils sont encore diversifiés dans des fonds
              monétaires. Vos versements sur chaque compte séquestre sont
              protégés jusqu'à 100 000 € respectivement.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Toutes les informations pertinentes sur la protection des
              versements de chaque banque partenaire peuvent être consultées
              dans l'application. Les espèces déposées dans les fonds monétaires
              sont directement détenues sur un compte dépositaire séparé. Les
              allocations de fonds monétaires suivent les mêmes règles strictes
              de sauvegarde qui sont en place pour les actions et les versements
              en espèces. Cela signifie que vos actifs sont séparés des actifs
              de l'entreprise. Par conséquent, pour les fonds monétaires, les
              systèmes de garantie des versements ne s'appliquent pas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </article>
      <Button
        variant="text"
        sx={{
          color: "var(--primary-font-color)",
          fontFamily: "var(--font-family)",
          fontWeight: "600",
          fontSize: "18px",
          textTransform: "none",
          paddingLeft: "1em",
        }}
      >
        Centre d'Aide <ChevronRightIcon />
      </Button>
    </section>
  );
}
