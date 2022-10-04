import '../css/components/footer.scss'
import {
	faLinkedinIn,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<footer className='footer'>
			Copyright &copy; alcb1310Systems 2022
			<a
				href='https://www.linkedin.com/in/andres-court-benitez-11ab6613b'
				target='_blank'
				rel='noreferrer'
			>
				<FontAwesomeIcon icon={faLinkedinIn} className='icon' />
			</a>
			<a
				href='https://twitter.com/alcb1310'
				target='_blank'
				rel='noreferrer'
			>
				<FontAwesomeIcon icon={faTwitter} className='icon' />
			</a>
			<a
				href='https://github.com/alcb1310'
				target='_blank'
				rel='noreferrer'
			>
				<FontAwesomeIcon icon={faGithub} className='icon' />
			</a>
		</footer>
	)
}

export default Footer
